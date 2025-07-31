import { LoopAssets } from '@/lib/types';

const BASE_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_BASE_URL;

export const ANIMATIONS_LOOPS = {
  day_of_planet: `${BASE_URL}/animacion-dia-de-la-tierra-loop.mp4`,
  logo_1up: `${BASE_URL}/animacion-logo-1up-loop.mp4`,
  logo_f23: `${BASE_URL}/animacion-logo-f23-loop.mp4`,
  logo_fino: `${BASE_URL}/animacion-logo-fino-loop.mp4`,
  logo_pag: `${BASE_URL}/animacion-logo-pag-loop.mp4`,
  logo_polariwraps: `${BASE_URL}/animacion-logo-polariwraps-loop.mp4`,
} as const;

export const VIDEO_MONTAGE_LOOPS = {
  noble_cafe: `${BASE_URL}/montaje-video-cafe-noble-loop.mp4`,
  recognition_day: `${BASE_URL}/montaje-video-dia-reconocimientos-loop.mp4`,
  dinner_teaser: `${BASE_URL}/montaje-video-expectativa-cena-loop.mp4`,
  f23_teaser: `${BASE_URL}/montaje-video-expectativa-f23-loop.mp4`,
  stories_teaser: `${BASE_URL}/montaje-video-expectativa-historias-loop.mp4`,
  we_moved: `${BASE_URL}/montaje-video-nos-trasladamos-loop.mp4`,
} as const;

export const ANIMATED_PIECES_LOOPS = {
  noble_library: `${BASE_URL}/piezas-animadas-biblioteca-noble-loop.mp4`,
  change_habits: `${BASE_URL}/piezas-animadas-cambiar-habitos-loop.mp4`,
  transparency_culture: `${BASE_URL}/piezas-animadas-cultura-transparencia-loop.mp4`,
  love_friendship_day: `${BASE_URL}/piezas-animadas-dia-amor-amistad-loop.mp4`,
  martian_escape: `${BASE_URL}/piezas-animadas-huida-marciano-loop.mp4`,
} as const;

export const SOCIAL_MEDIA_LOOPS = {
  platform_1up: `${BASE_URL}/redes-1up-loop.mp4`,
  boi_report: `${BASE_URL}/redes-boi-report-loop.mp4`,
  noble_union_branch_day: `${BASE_URL}/redes-dia-sede-union-noble-loop.mp4`,
  spaces_to_boost: `${BASE_URL}/redes-espacios-para-pontenciar-loop.mp4`,
  we_are_hiring: `${BASE_URL}/redes-estamos-buscando-loop.mp4`,
  burger: `${BASE_URL}/redes-hamburguesa-loop.mp4`,
  honda: `${BASE_URL}/redes-honda-loop.mp4`,
  fino_regulations: `${BASE_URL}/redes-regulatorios-fino-loop.mp4`,
  noble_union_branches: `${BASE_URL}/redes-sedes-noble-union-loop.mp4`,
  life_insurance: `${BASE_URL}/redes-seguro-vida-loop.mp4`,
  noble_teaser: `${BASE_URL}/redes-teaser-noble-loop.mp4`,
  meet_creative_agency: `${BASE_URL}/redes-te-presentamos-agencia-creativa-loop.mp4`,
  union_noble: `${BASE_URL}/redes-union-noble-loop.mp4`,
} as const;

export const REEL_LOOP = `${BASE_URL}/reel-ana-loop.mp4` as const;

export const LOOPS_ASSETS: LoopAssets = {
  animations: ANIMATIONS_LOOPS,
  video_montage: VIDEO_MONTAGE_LOOPS,
  animated_pieces: ANIMATED_PIECES_LOOPS,
  social_media: SOCIAL_MEDIA_LOOPS,
  reel: REEL_LOOP,
} as const;
