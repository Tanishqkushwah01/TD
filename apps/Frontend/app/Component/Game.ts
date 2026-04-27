type Tool =
  | "LockIcon"
  | "HandTool"
  | "Cursor"
  | "Rect"
  | "Diamond"
  | "Circle"
  | "Arrow"
  | "Line"
  | "Pencil"
  | "Text"
  | "Eraser";

type Shape =
  | { type: "rect"; x: number; y: number; w: number; h: number; color: string }
  | { type: "circle"; x: number; y: number; r: number; color: string }
  | { type: "diamond"; x: number; y: number; w: number; h: number; color: string }
  | { type: "line"; x1: number; y1: number; x2: number; y2: number; color: string }
  | { type: "arrow"; x1: number; y1: number; x2: number; y2: number; color: string }
  | { type: "pencil"; points: { x: number; y: number }[]; color: string }
  | { type: "text"; x: number; y: number; text: string; color: string };

export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private socket: WebSocket;
  private roomId: string;

  private shapes: Shape[] = [];
  private selectedTool: Tool = "Cursor";
  private color = "#ffffff";

  private startX = 0;
  private startY = 0;
  private clicked = false;
  private pencilPoints: { x: number; y: number }[] = [];

  constructor(canvas: HTMLCanvasElement, roomId: string, socket: WebSocket) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.socket = socket;
    this.roomId = roomId;

    this.initMouse();
    this.initSocket();
    this.draw();
  }

  // 🎯 TOOL CHANGE
  setTool(tool: Tool) {
    this.selectedTool = tool;
  }

  setColor(color: string) {
    this.color = color;
  }

  // 🔌 SOCKET
  initSocket() {
    this.socket.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.type === "draw") {
        this.shapes.push(msg.shape);
        this.draw();
      }
    };
  }

  // 🖱️ EVENTS
  initMouse() {
    this.canvas.addEventListener("mousedown", this.down);
    this.canvas.addEventListener("mousemove", this.move);
    this.canvas.addEventListener("mouseup", this.up);
  }

  down = (e: MouseEvent) => {
    this.clicked = true;
    this.startX = e.clientX;
    this.startY = e.clientY;

    if (this.selectedTool === "Pencil") {
      this.pencilPoints = [{ x: this.startX, y: this.startY }];
    }

    if (this.selectedTool === "Text") {
      const text = prompt("Enter text");
      if (text) {
        const shape: Shape = {
          type: "text",
          x: this.startX,
          y: this.startY,
          text,
          color: this.color,
        };
        this.addShape(shape);
      }
    }
  };

  move = (e: MouseEvent) => {
    if (!this.clicked) return;

    const x = e.clientX;
    const y = e.clientY;

    if (this.selectedTool === "Pencil") {
      this.pencilPoints.push({ x, y });
      this.draw();
      this.drawPencil();
      return;
    }

    if (this.selectedTool === "Eraser") {
      this.shapes = this.shapes.filter((s) => !this.hitTest(s, x, y));
      this.draw();
      return;
    }

    this.draw(); // clear + redraw
    this.ctx.strokeStyle = this.color;

    if (this.selectedTool === "Rect") {
      this.ctx.strokeRect(this.startX, this.startY, x - this.startX, y - this.startY);
    }

    if (this.selectedTool === "Circle") {
      const r = Math.hypot(x - this.startX, y - this.startY);
      this.ctx.beginPath();
      this.ctx.arc(this.startX, this.startY, r, 0, Math.PI * 2);
      this.ctx.stroke();
    }

    if (this.selectedTool === "Diamond") {
      this.drawDiamond(this.startX, this.startY, x, y);
    }

    if (this.selectedTool === "Line") {
      this.ctx.beginPath();
      this.ctx.moveTo(this.startX, this.startY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }

    if (this.selectedTool === "Arrow") {
      this.drawArrow(this.startX, this.startY, x, y);
    }
  };

  up = (e: MouseEvent) => {
    this.clicked = false;
    const x = e.clientX;
    const y = e.clientY;

    let shape: Shape | null = null;

    if (this.selectedTool === "Rect") {
      shape = { type: "rect", x: this.startX, y: this.startY, w: x - this.startX, h: y - this.startY, color: this.color };
    }

    if (this.selectedTool === "Circle") {
      shape = { type: "circle", x: this.startX, y: this.startY, r: Math.hypot(x - this.startX, y - this.startY), color: this.color };
    }

    if (this.selectedTool === "Diamond") {
      shape = { type: "diamond", x: this.startX, y: this.startY, w: x - this.startX, h: y - this.startY, color: this.color };
    }

    if (this.selectedTool === "Line") {
      shape = { type: "line", x1: this.startX, y1: this.startY, x2: x, y2: y, color: this.color };
    }

    if (this.selectedTool === "Arrow") {
      shape = { type: "arrow", x1: this.startX, y1: this.startY, x2: x, y2: y, color: this.color };
    }

    if (this.selectedTool === "Pencil") {
      shape = { type: "pencil", points: this.pencilPoints, color: this.color };
      this.pencilPoints = [];
    }

    if (shape) this.addShape(shape);
  };

  // ➕ ADD + SYNC
  addShape(shape: Shape) {
    this.shapes.push(shape);
    this.draw();

    this.socket.send(JSON.stringify({
      type: "draw",
      roomId: this.roomId,
      shape
    }));
  }

  // 🎨 DRAW ALL
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.shapes.forEach((s) => {
      this.ctx.strokeStyle = s.color;

      if (s.type === "rect") this.ctx.strokeRect(s.x, s.y, s.w, s.h);

      if (s.type === "circle") {
        this.ctx.beginPath();
        this.ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        this.ctx.stroke();
      }

      if (s.type === "diamond") this.drawDiamond(s.x, s.y, s.x + s.w, s.y + s.h);

      if (s.type === "line") {
        this.ctx.beginPath();
        this.ctx.moveTo(s.x1, s.y1);
        this.ctx.lineTo(s.x2, s.y2);
        this.ctx.stroke();
      }

      if (s.type === "arrow") this.drawArrow(s.x1, s.y1, s.x2, s.y2);

      if (s.type === "pencil") {
        this.ctx.beginPath();
        s.points.forEach((p, i) => {
          if (i === 0) this.ctx.moveTo(p.x, p.y);
          else this.ctx.lineTo(p.x, p.y);
        });
        this.ctx.stroke();
      }

      if (s.type === "text") {
        this.ctx.fillStyle = s.color;
        this.ctx.fillText(s.text, s.x, s.y);
      }
    });
  }

  // 🔷 helpers
  drawDiamond(x1: number, y1: number, x2: number, y2: number) {
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(cx, y1);
    this.ctx.lineTo(x2, cy);
    this.ctx.lineTo(cx, y2);
    this.ctx.lineTo(x1, cy);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawArrow(x1: number, y1: number, x2: number, y2: number) {
    const head = 10;
    const angle = Math.atan2(y2 - y1, x2 - x1);

    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);

    this.ctx.lineTo(
      x2 - head * Math.cos(angle - Math.PI / 6),
      y2 - head * Math.sin(angle - Math.PI / 6)
    );
    this.ctx.moveTo(x2, y2);
    this.ctx.lineTo(
      x2 - head * Math.cos(angle + Math.PI / 6),
      y2 - head * Math.sin(angle + Math.PI / 6)
    );

    this.ctx.stroke();
  }

  drawPencil() {
    this.ctx.beginPath();
    this.pencilPoints.forEach((p, i) => {
      if (i === 0) this.ctx.moveTo(p.x, p.y);
      else this.ctx.lineTo(p.x, p.y);
    });
    this.ctx.stroke();
  }

  hitTest(shape: Shape, x: number, y: number) {
    if (shape.type === "rect") {
      return x > shape.x && x < shape.x + shape.w &&
             y > shape.y && y < shape.y + shape.h;
    }
    return false;
  }
}