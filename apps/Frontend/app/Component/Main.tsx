export default function WelcomeHeading()
{
    return(
        <main style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 80px", animation: "fadeUp 0.6s ease both" }}>

        {/* page header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
          <div>
            <p style={{ fontSize: 14, color: "#e8735a", fontStyle: "italic", marginBottom: 8 }}>— your workspace</p>
            <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-1.2px" }}>
              Welcome back,{" "}
              <em style={{
                fontStyle: "italic",
                background: "linear-gradient(180deg, transparent 60%, #f5b8ac 60%)",
                padding: "0 4px",
              }}>Tanishq.</em>
            </h1>
          </div>
          <span style={{ fontSize: 15, color: "#5a5a5a", fontFamily: "Georgia, serif", fontStyle: "italic" }}>

            {/* {rooms.length} */}
            3 board
             {/* {rooms.length !== 1 ? "s" : ""} */}
          </span>
        {/* </div> */}

        {/* grid */}
        {/* {rooms.length === 0 ? ( */}
          {/* <div style={{ textAlign: "center", padding: "80px 0", color: "#8a8070" }}>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 24, fontStyle: "italic", marginBottom: 16 }}>No boards yet.</p>
            <p style={{ fontSize: 15 }}>Hit <strong style={{ color: "#1a1a1a" }}>Create room</strong> to start your first sketch.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {rooms.map(r => <RoomCard key={r.id} room={r} isNew={newIds.has(r.id)} />)}
          </div>
        )} */}
        </div>
      </main>
    );
}