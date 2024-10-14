import React, { createContext, useState } from "react";

// Crea el contexto
export const StudentDataContext = createContext();

// Crea el proveedor del contexto
export const StudentDataProvider = ({ children }) => {
  const [studentData, setStudentData] = useState(null);

  return (
    <StudentDataContext.Provider value={{ studentData, setStudentData }}>
      {children}
    </StudentDataContext.Provider>
  );
};
