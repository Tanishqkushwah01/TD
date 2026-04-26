"use client"
import { useRef } from "react";
import { handleSubmit } from "../../Component/handleSubmit";
import { useRouter } from "next/navigation";



export default function Signin() {

  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);

  const router = useRouter();


  return (
    <div className="auth-page">
      {/* NAVBAR */}
      <nav className="nav">
        <a href="/" className="logo">
          <span className="logo-icon">T</span>
          <span className="logo-text">Tanix</span>
        </a>
      </nav>

      <div className="auth-wrapper">
        {/* Floating doodles */}
        <div className="doodle doodle-1">
          <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="50" height="32" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="2" />
            <path d="M60 26 Q80 16 92 26" fill="none" stroke="#e8735a" strokeWidth="2" markerEnd="url(#d1a)" />
            <ellipse cx="108" cy="26" rx="28" ry="18" fill="white" stroke="#1a1a1a" strokeWidth="2" />
            <defs>
              <marker id="d1a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#e8735a" />
              </marker>
            </defs>
          </svg>
        </div>
        <div className="doodle doodle-2">
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,8 72,60 8,60" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 3" />
          </svg>
        </div>
        <div className="doodle doodle-3">
          <div className="sticky-note-sm">just one click ✦</div>
        </div>
        <div className="doodle doodle-4">
          <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="24" fill="none" stroke="#e8735a" strokeWidth="2" strokeDasharray="5 3" />
          </svg>
        </div>

        {/* Card */}
        <div className="auth-card">
          <div className="auth-card-header">
            <div className="auth-logo">
              <span className="logo-icon">S</span>
            </div>
            <h1 className="auth-title">Welcome back</h1>
            <p className="auth-sub">Sign in to your Tanix account</p>
          </div>

          {/* Social buttons */}
          {/* <div className="social-btns">
              <button className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Continue with GitHub
              </button>
            </div> */}

          {/* <div className="divider">
              <span className="divider-line" />
              <span className="divider-text">or sign in with email</span>
              <span className="divider-line" />
            </div> */}

          {/* Form */}
          {/* div banaya hai form ko */}
          <div className="auth-form" >
            <div className="field">
              <label className="field-label" htmlFor="email">Email</label>
              <input
                ref={refEmail}
                id="email"
                type="email"
                className="field-input"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div className="field">
              <div className="field-row">
                <label className="field-label" htmlFor="password">Password</label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>
              <input
                ref={refPassword}
                id="password"
                type="password"
                className="field-input"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
            <button type="button" onClick={async () => {
              console.log("button clicked");
              const userDetails = {
                email: refEmail.current?.value || "",
                password: refPassword.current?.value || ""
              }
              await handleSubmit({ FormName: "signin", userDetails, router });
            }} className="submit-btn">Sign in →</button>
          </div>

          {/* Sign up */}
          <div className="auth-footer">
            <span>Don&apos;t have an account?</span>
            <a href="/signup" className="switch-link">Create one — it&apos;s free</a>
          </div>
        </div>

        {/* Bottom label */}
        <p className="built-label">Built solo, shipped in public ✦</p>
      </div>
    </div>
  );
}