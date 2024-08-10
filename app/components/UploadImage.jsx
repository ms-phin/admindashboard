import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import Image from "next/image";

const UploadImage = ({ setImage, setImageStorageId, image }) => {
  const [isAiThumbnail, setIsAiThumbnail] = useState(false);

  return (
    <>
      <div className="mt-10 w-full flex justify-center">
        <div className="generate_thumbnail">
          <Button
            type="button"
            variant="plain"
            onClick={() => setIsAiThumbnail(false)}
            className={cn("", { "bg-black-6": !isAiThumbnail })}
          >
            Upload custom image
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="image_div"
          // onClick={() => imageRef?.current?.click()}
        >
          <Input
            type="file"
            className="hidden"
            // ref={imageRef}
            // onChange={(e) => uploadImage(e)}
          />

          <div className="flex text-[#00ABFF]">
            Uploading Book Cover
            {/* <Loader size={20} className="animate-spin ml-2" /> */}
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-12 font-normal text-gray">
              PNG, JPG, or GIF (max. 1080x1080px)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImage;

// "use client";

// import React, { useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { Input } from "@/components/ui/input";

// const UploadImage = ({ setImage, setImageStorageId, image }) => {
//   const [isAiThumbnail, setIsAiThumbnail] = useState(false);
//   const imageRef = useRef(null);

//   // Define a submit handler.
//   const onSubmit = (values) => {
//     // Do something with the form values.
//     console.log(values);
//   };

//   return (
//     <>
//       <div className="generate_thumbnail">
//         <Button
//           type="button"
//           variant="plain"
//           onClick={() => setIsAiThumbnail(false)}
//           className={cn("", { "bg-black-6": !isAiThumbnail })}
//         >
//           Upload custom image
//         </Button>
//       </div>

//       <div className="image_div" onClick={() => imageRef.current.click()}>
//         <Input
//           type="file"
//           className="hidden"
//           ref={imageRef}
//           // onChange={(e) => uploadImage(e)}
//         />

//         <div className="flex text-white-1">
//           Uploading
//         </div>

//         <div className="flex flex-col items-center gap-1">
//           <h2 className="text-12 font-bold text-orange-1">Click to upload</h2>
//           <p className="text-12 font-normal text-gray-1">
//             PNG, JPG, or GIF (max. 1080x1080px)
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UploadImage;
