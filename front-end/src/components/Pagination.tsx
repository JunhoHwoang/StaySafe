import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Import Button from shadcn components
import { cn } from '@/lib/utils'; // Utility function for class merging if needed

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to handle page changes
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/* Previous Button */}
      <Button
        className="bg-gray-200"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {`<`}
      </Button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={cn(
            'bg-gray-200',
            index + 1 === currentPage && 'bg-primary text-white'
          )}
        >
          {index + 1}
        </Button>
      ))}

      {/* Next Button */}
      <Button
        className="bg-gray-200"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {`>`}
      </Button>
    </div>
  );
};

export default Pagination;
