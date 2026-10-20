import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { PERSONAL_INFO } from '@/constants';

export const dynamic = 'force-static';

export async function GET() {
  const avatar = await readFile(join(process.cwd(), 'src/assets/avatar.jpg'));
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          color: '#0a0a0a',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <img src={avatarSrc} alt="" width={100} height={100} style={{ borderRadius: 9999 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 38 }}>{PERSONAL_INFO.name}</div>
            <div style={{ fontSize: 26, color: '#525252' }}>{PERSONAL_INFO.title}</div>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 62, lineHeight: 1.12, letterSpacing: '-0.02em' }}>
          {PERSONAL_INFO.tagline}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#525252' }}>
          <span>riyadyahya.github.io</span>
          <span style={{ color: '#1d4ed8' }}>Book a 30-min call</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
