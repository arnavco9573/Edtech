// components/SubjectTable.tsx
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
} from "@heroui/react";
import { useState, useMemo } from "react";

type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

type Props = {
  data: Subject[];
};

export default function SubjectTable({ data }: Props) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [page, data]);

  return (
    <div className="flex flex-col gap-4">
      <Table aria-label="Subjects Table" isStriped>
        <TableHeader>
          <TableColumn>Subject Name</TableColumn>
          <TableColumn className="hidden md:table-cell">Teachers</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>

        <TableBody>
          {items.map((subject) => (
            <TableRow key={subject.id}>
              <TableCell>{subject.name}</TableCell>
              <TableCell className="hidden md:table-cell">
                {subject.teachers.join(", ")}
              </TableCell>
              <TableCell>
                <Button size="sm" color="primary">
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
    </div>
  );
}