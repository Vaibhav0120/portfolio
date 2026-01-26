import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1080px',
          height: '1080px',
          backgroundColor: '#000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* CENTER CONTAINER */}
        <div
          style={{
            width: '700px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Accent Line */}
          <div
            style={{
              width: '72px',
              height: '4px',
              backgroundColor: '#fff',
              marginBottom: '32px',
              boxShadow: '0 0 14px rgba(255,255,255,0.5)',
            }}
          />

          {/* Name */}
          <div
            style={{
              fontSize: '88px',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              textShadow: '0 0 20px rgba(255,255,255,0.35)',
            }}
          >
            Vaibhav Sharma
          </div>

          {/* Role */}
          <div
            style={{
              marginTop: '20px',
              fontSize: '34px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              opacity: 0.85,
            }}
          >
            Software Developer
          </div>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1080,
    }
  )
}
