"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const AppointmentsPagination = ({ currentPage, totalPages, onPageChange }) => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          onClick={() => onPageChange(currentPage - 1)}
          className={
            currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
          }
        />
      </PaginationItem>

      <PaginationItem>
        <PaginationNext
          onClick={() => onPageChange(currentPage + 1)}
          className={
            currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"
          }
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default AppointmentsPagination;
