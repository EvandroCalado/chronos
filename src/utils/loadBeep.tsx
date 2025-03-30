import gravitationalBeep from '../assets/audios/gravitational_beep.mp3';

export const loadBeep = () => {
  const audio = new Audio(gravitationalBeep);
  audio.load();

  return () =>
    audio.play().catch(error => console.error('Erro ao tocar o audio', error));
};
