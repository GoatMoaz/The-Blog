import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import AnimatedItem from "@/components/ui/animated-item";

export default function PaginationBar({
  totalPages,
  currentPage,
  handlePageChange,
  generatePageNumbers,
}: {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  generatePageNumbers: () => (number | string)[];
}) {
  return (
    <>
      {totalPages > 1 && (
        <AnimatedItem animation="fadeIn" delay={0.3} className="mb-8">
          <Pagination className="justify-center">
            <PaginationContent>
              <PaginationItem>
                {/* Previous Page Button */}
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) {
                      handlePageChange(currentPage - 1);
                    }
                  }}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50 hidden min-[425px]:flex"
                      : "cursor-pointer hover:bg-accent hidden min-[425px]:flex"
                  }
                />
              </PaginationItem>

              {generatePageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {page === "ellipsis" ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page as number);
                      }}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                {/* Next Page Button */}
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      handlePageChange(currentPage + 1);
                    }
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50 hidden min-[425px]:flex"
                      : "cursor-pointer hover:bg-accent hidden min-[425px]:flex"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </AnimatedItem>
      )}
    </>
  );
}
