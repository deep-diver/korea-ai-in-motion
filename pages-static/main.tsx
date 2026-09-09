import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import '../app/globals.css';
import './fonts.css';

const Committee = lazy(() => import('../components/committee/CommitteeExperience'));
createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<p style={{ padding: '2rem' }}>장면을 불러오고 있어요…</p>}>
    <Committee />
  </Suspense>,
);
