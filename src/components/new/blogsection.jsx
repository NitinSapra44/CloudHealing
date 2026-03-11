import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card" 
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function BlogSection({ setCarouselApi, selectedCategory, blogPosts }) {
  // Filter based on selected category
  const filteredPosts = selectedCategory && selectedCategory !== "All"
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts

  // Limit posts to max 6
  const limitedPosts = filteredPosts.slice(0, 6)

  return (
    <>
      {limitedPosts.length === 0 ? (
        <div className="w-full py-10 text-center font-poppins flex  text-lg font-medium text-gray-600">
          No blog posts found for this category.
        </div>
      ) : (
        <Carousel
          opts={{ align: "start" }}
          className="w-full"
          setApi={setCarouselApi}
        >
          <CarouselContent className="gap-x-10">
            {limitedPosts.map((post, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="p-10">
                  {/* Wrap the card in Link */}
                  <Link href={`/blog/${post._id}`} className="block">
                    <Card className="bg-white text-black min-w-[300px] rounded-[50px] overflow-hidden border-none shadow-none hover:shadow-lg transition">
                      <CardContent className="p-0">
                        <div className="relative">
                          <div className="relative w-full h-[400px]">
                            <Image
                              src={post.titlePicUrl}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <span className="absolute top-6 right-6 bg-[#00373E] text-white px-4 py-2 rounded-full text-base font-medium">
                            {post.category}
                          </span>
                        </div>

                        <div className="py-8 px-2">
                          <h3 className="text-base font-semibold leading-snug font-torus">
                            {post.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </>
  )
}
