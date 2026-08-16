

import AddContentForm from "../components/AddContentForm/AddContentForm";

const AddMusic = () => {
  return (
   <div>
    <AddContentForm
      eyebrow="افزودن موزیک جدید"
      title="موزیک"
      fileLabel="فایل موزیک"
      fileHint="MP3, MP4 — حداکثر ۱۰۰ مگابایت"
      descriptionPlaceholder="توضیحات مورد نیاز درمورد خواننده"
    />
   </div>
  );
};

export default AddMusic;