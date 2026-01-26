import { ImageResponse } from '@vercel/og'
import { headers } from 'next/headers'

export const runtime = 'edge'

export async function GET() {
  const ua = (await headers()).get('user-agent') || ''
  const isWhatsApp = ua.includes('WhatsApp')

  return new ImageResponse(
    isWhatsApp ? whatsappOG() : defaultOG(),
    {
      width: 1200,
      height: 630,
    }
  )
}

/* ---------- DEFAULT (Twitter / LinkedIn / Browser) ---------- */
function defaultOG() {
  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '90px',
        color: '#fff',
        fontFamily: 'Inter, system-ui, sans-serif',
        backgroundImage:
          'linear-gradient(135deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    >
      <div
        style={{
          width: '90px',
          height: '4px',
          backgroundColor: '#fff',
          marginBottom: '36px',
          boxShadow: '0 0 14px rgba(255,255,255,0.55)',
        }}
      />

      <div
        style={{
          fontSize: '92px',
          fontWeight: 800,
          letterSpacing: '-0.035em',
          lineHeight: 1.08,
          textShadow:
            '0 0 22px rgba(255,255,255,0.35), 0 0 2px rgba(255,255,255,0.9)',
        }}
      >
        Vaibhav Sharma
      </div>

      <div
        style={{
          marginTop: '22px',
          fontSize: '34px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          opacity: 0.85,
        }}
      >
        Software Developer
      </div>

      <div
        style={{
          marginTop: 'auto',
          fontSize: '22px',
          opacity: 0.6,
        }}
      >
        vaibhavsh0120.vercel.app
      </div>
    </div>
  )
}

/* ---------- WHATSAPP (CROP-SAFE) ---------- */
function whatsappOG() {
  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* CENTER SAFE ZONE */}
      <div
        style={{
          width: '560px',
          textAlign: 'center',
        }}
      >
        {/* Accent */}
        <div
          style={{
            width: '64px',
            height: '4px',
            backgroundColor: '#fff',
            margin: '0 auto 28px',
            boxShadow: '0 0 12px rgba(255,255,255,0.5)',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            textShadow:
              '0 0 18px rgba(255,255,255,0.35)',
          }}
        >
          Vaibhav Sharma
        </div>

        {/* Role */}
        <div
          style={{
            marginTop: '16px',
            fontSize: '28px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            opacity: 0.85,
          }}
        >
          Software Developer
        </div>
      </div>
    </div>
  )
}
