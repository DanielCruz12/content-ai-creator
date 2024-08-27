import { useField } from "formik";

interface FormFileProps {
  name: string;
  fileRef: React.RefObject<HTMLInputElement>;
}

export const FormFile: React.FC<FormFileProps> = ({ fileRef, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta);

  return (
    <div>
      <input
        className="form-control block w-full text-sm text-gray-900 border border-gray-300 dark:border-gray-700 cursor-pointer dark:text-gray-400 focus:outline-none"
        aria-describedby={`${field.name}_input_help`}
        id="dropzone-file"
        ref={fileRef}
        multiple={true}
        type="file"
        {...field}
      />
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id={`${field.name}_input_help`}
      >
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
    </div>
  );
};
