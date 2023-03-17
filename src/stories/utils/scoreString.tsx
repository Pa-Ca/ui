export default (score: number) => {
  if (score >= 4.5) return 'Excelente';
  else if (score >= 3.5) return 'Bueno';
  else return 'Mejorable';
}