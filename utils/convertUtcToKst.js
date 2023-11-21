export default function convertUtcToKst(utcString) {
  if(!utcString) return;
  // UTC 시간을 Date 객체로 변환
  const utcDate = new Date(utcString);

  // 한국 시간으로 변환 (UTC+9)
  const kstOffset = 9 * 60; // 9시간을 분으로 변환
  const kstDate = new Date(utcDate.getTime() + kstOffset * 60000);

  // 12시간 형식으로 변환하여 오전/오후와 함께 표시
  const formattedTime = new Intl.DateTimeFormat('ko-KR',  { hour: 'numeric', hour12: true, timeZone: 'Asia/Seoul' }).format(kstDate);

  return formattedTime;
}

