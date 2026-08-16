

import AddContentForm from "../components/AddContentForm/AddContentForm";

const AddPodcast = () => {
  return (
   <div>
    <AddContentForm
      eyebrow="افزودن پادکست جدید"
      title="پادکست"
      fileLabel="فایل پادکست"
      fileHint="MP3, MP4 — حداکثر ۱۰۰ مگابایت"
      descriptionPlaceholder="توضیحات مورد نیاز درمورد پادکست"
    />
   </div>
  );
};

export default AddPodcast;