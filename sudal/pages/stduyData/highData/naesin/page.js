// pages/SubjectPage.js
import { useState } from 'react';

export default function SubjectPage() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectChange = async (event) => {
    const subject = event.target.value;
    setSelectedSubject(subject);

    // 데이터베이스에서 데이터를 가져오는 코드를 여기에 추가해야 합니다.
    // 이 부분은 사용하는 데이터베이스와 서버 측 코드에 따라 달라집니다.
  };

  return (
    <div>
      <select onChange={handleSubjectChange}>
        <option value="subject1">과목1</option>
        <option value="subject2">과목2</option>
        {/* 추가적인 과목들... */}
      </select>

      {selectedSubject && (
        <iframe src={`/api/${selectedSubject}`}></iframe>
      )}
    </div>
  );
}