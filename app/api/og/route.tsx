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
            width: '760px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Accent Line */}
          <div
            style={{
              width: '96px',
              height: '6px',
              backgroundColor: '#fff',
              marginBottom: '36px',
              boxShadow: '0 0 10px rgba(255,255,255,0.4)',
            }}
          />

          {/* Name */}
          <div
            style={{
              fontSize: '104px',
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-0.025em',
              textShadow: '0 0 10px rgba(255,255,255,0.25)',
            }}
          >
            Vaibhav Sharma
          </div>

          {/* Role */}
          <div
            style={{
              marginTop: '24px',
              fontSize: '40px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              opacity: 0.9,
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
