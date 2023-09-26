function ContactInfo() {

    return (
        <div>
           <section id="Contactus" className="text-gray-600 bg-black body-font p-12 py-2">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
                        <img width={500} height={500} src="blog_list3.jpg" alt="" className="ml-16 object-cover rounded-2xl" />
                    </div>
                    <div className="flex flex-col flex-wrap text-center sm:text-left lg:py-6 -mb-10 lg:w-1/2 lg:pl-12">    
                      <div class="flex  flex-col mb-10 lg:items-start items-center">
        <div class="flex-grow">
          <h2 class="text-white text-5xl title-font font-medium mb-3 ">For Donations
        </h2>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="flex-grow">
          <h2 class="text-white text-lg title-font font-medium mb-3">Contact Us</h2>
          <p class="leading-relaxed text-base text-white">123-456-7890</p>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="flex-grow">
          <h2 class="text-white text-lg title-font font-medium mb-3">Send an Email</h2>
          <p class="leading-relaxed text-base text-white">hello@reallygreatsite.com</p>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="flex-grow">
          <h2 class="text-white text-lg title-font font-medium mb-3">Write Us</h2>
          <p class="leading-relaxed text-base text-white">123 Anywhere St., Any City, State 12345</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
  }
export default ContactInfo;