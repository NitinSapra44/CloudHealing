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
    <Carousel
      opts={{ align: "start" }}
      className="w-full"
      setApi={setCarouselApi}
    >
      <CarouselContent className="gap-x-5">
        {limitedPosts.map((post, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-10">
              {/* Wrap the card in Link */}
              <Link href={`/blog/${post._id}`} className="block">
                <Card className="bg-white text-black w-full rounded-[50px] overflow-hidden border-none shadow-none hover:shadow-lg transition">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="relative w-full h-[600px]">
                        <Image
                          src={post.titlePicUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <span className="absolute top-6 right-6 bg-[#00373E] text-white px-4 py-2 rounded-full text-3xl font-medium">
                        {post.category}
                      </span>
                    </div>

                    <div className="py-8 px-2">
                      <h3 className="text-3xl font-semibold leading-snug font-torus">
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
  )
}
