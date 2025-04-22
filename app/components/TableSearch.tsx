"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Pagination,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const teacherData : Teacher[] = [
  {
    id: 1,
    teacherId: "TCH001",
    name: "Anjali Sharma",
    email: "anjali.sharma@example.com",
    photo: "https://avatar.iran.liara.run/public/girl",
    phone: "9876543210",
    subjects: ["Data Structures", "Algorithms"],
    classes: ["CS301", "CS401"],
    address: "New Delhi, India",
  },
  {
    id: 2,
    teacherId: "TCH002",
    name: "Ravi Verma",
    email: "ravi.verma@example.com",
    photo: "https://avatar.iran.liara.run/public/boy",
    phone: "9823456712",
    subjects: ["Database Systems", "SQL"],
    classes: ["CS302", "CS402"],
    address: "Pune, India",
  },
  {
    id: 3,
    teacherId: "TCH003",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    photo: "https://avatar.iran.liara.run/public/girl",
    phone: "7890123456",
    subjects: ["Machine Learning", "Python Programming"],
    classes: ["AI501", "CS201"],
    address: "Bangalore, India",
  },
  {
    id: 4,
    teacherId: "TCH004",
    name: "Amit Singh",
    email: "amit.singh@example.com",
    photo: "https://avatar.iran.liara.run/public/boy",
    phone: "8801234567",
    subjects: ["Computer Networks", "Cybersecurity"],
    classes: ["CS502", "CS601"],
    address: "Hyderabad, India",
  },
  {
    id: 5,
    teacherId: "TCH005",
    name: "Neha Gupta",
    email: "neha.gupta@example.com",
    photo: "https://avatar.iran.liara.run/public/girl",
    phone: "9912345678",
    subjects: ["Operating Systems", "Linux Administration"],
    classes: ["CS401", "CS503"],
    address: "Chennai, India",
  },
  {
    id: 6,
    teacherId: "TCH006",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    photo: "https://avatar.iran.liara.run/public/boy",
    phone: "7723456789",
    subjects: ["Cloud Computing", "AWS"],
    classes: ["CS602", "CS701"],
    address: "Mumbai, India",
  },
  {
    id: 7,
    teacherId: "TCH007",
    name: "Sonia Mehta",
    email: "sonia.mehta@example.com",
    photo: "https://avatar.iran.liara.run/public/girl",
    phone: "6634567890",
    subjects: ["Artificial Intelligence", "Deep Learning"],
    classes: ["AI601", "AI701"],
    address: "Kolkata, India",
  },
  {
    id: 8,
    teacherId: "TCH008",
    name: "Vikram Joshi",
    email: "vikram.joshi@example.com",
    photo: "https://avatar.iran.liara.run/public/boy",
    phone: "5545678901",
    subjects: ["Blockchain", "Cryptography"],
    classes: ["CS801", "CS702"],
    address: "Ahmedabad, India",
  },
  {
    id: 9,
    teacherId: "TCH009",
    name: "Deepika Reddy",
    email: "deepika.reddy@example.com",
    photo: "https://avatar.iran.liara.run/public/girl",
    phone: "4456789012",
    subjects: ["Web Development", "JavaScript"],
    classes: ["CS301", "CS401"],
    address: "Jaipur, India",
  },
  {
    id: 10,
    teacherId: "TCH010",
    name: "Arun Malhotra",
    email: "arun.malhotra@example.com",
    photo: "https://avatar.iran.liara.run/public/boy",
    phone: "3367890123",
    subjects: ["Data Science", "R Programming"],
    classes: ["DS501", "DS601"],
    address: "Chandigarh, India",
  },
];

export default function TableSearch() {
  const [page, setPage] = useState(1);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const rowsPerPage = 8;

  const pages = Math.ceil(teacherData.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return teacherData.slice(start, end);
  }, [page, teacherData]);

  const handleViewTeacher = (teacher:Teacher) => {
    setSelectedTeacher(teacher);
    onOpen();
  };

  return (
    <div className="flex flex-col gap-4">
      <Table aria-label="Teacher Table" isStriped>
        <TableHeader>
          <TableColumn>Info</TableColumn>
          <TableColumn className="hidden md:table-cell">Teacher ID</TableColumn>
          <TableColumn className="hidden md:table-cell">Subjects</TableColumn>
          <TableColumn className="hidden md:table-cell">Classes</TableColumn>
          <TableColumn className="hidden lg:table-cell">Phone</TableColumn>
          <TableColumn className="hidden lg:table-cell">Address</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>

        <TableBody>
          {items.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Image
                    src={teacher.photo}
                    alt={teacher.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{teacher.name}</div>
                    <div className="text-xs text-gray-500">{teacher.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {teacher.teacherId}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {teacher.subjects.join(", ")}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {teacher.classes.join(", ")}
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                {teacher.phone}
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                {teacher.address}
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  color="primary"
                  onClick={() => handleViewTeacher(teacher)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {pages > 1 && (
        <div className="flex justify-center">
          <Pagination
            isCompact
            showControls
            total={pages}
            initialPage={page}
            onChange={setPage}
            size="sm"
            radius="full"
          />
        </div>
      )}

      {/* Teacher Details Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Teacher Details
              </ModalHeader>
              <ModalBody>
                {selectedTeacher && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col items-center">
                      <Image
                        src={selectedTeacher.photo}
                        alt={selectedTeacher.name}
                        width={150}
                        height={150}
                        className="rounded-full object-cover mb-4"
                      />
                      <h2 className="text-2xl font-bold">
                        {selectedTeacher.name}
                      </h2>
                      <p className="text-gray-500">{selectedTeacher.email}</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold">Teacher ID</h3>
                        <p>{selectedTeacher.teacherId}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Subjects</h3>
                        <p>{selectedTeacher.subjects.join(", ")}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Classes</h3>
                        <p>{selectedTeacher.classes.join(", ")}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p>{selectedTeacher.phone}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p>{selectedTeacher.address}</p>
                      </div>
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
