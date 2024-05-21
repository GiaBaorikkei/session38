import React, { useMemo } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

export default function UserList() {
  const users: User[] = [
    { id: 1, name: "Gia Bảo", age: 19 },
    { id: 2, name: "Phương Thảo", age: 17 },
    { id: 3, name: "Gia Huy", age: 19 },
    { id: 3, name: "Dương Hiệp", age: 20 },
  ];

  const user = useMemo(() => {
    return users.filter((item) => item.age > 18);
  }, []);

  return (
    <div>
      <h3>Danh sách người dùng trên 18 tuổi </h3>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.name} năm nay {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}
