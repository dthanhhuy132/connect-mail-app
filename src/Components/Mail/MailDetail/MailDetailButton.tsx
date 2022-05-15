import dayjs from 'dayjs';

interface MailDetailButtonProps {
  email: any;
}

const MailDetailButton: React.FC<MailDetailButtonProps> = ({ email }) => {
  return (
    <div className="flex justify-center items-center">
      <p className="text-[1.5rem] text-gray-700 font-semibold mr-5">
        {dayjs(email.date).format('HH:MM - MM/HH/YYYY')}
      </p>
      <div className="flex items-center justify-end gap-1">
        <button className="flex items-center justify-center duration-100 shadow-md gap-2 px-6 py-5 mx-2 text-[1.3rem] rounded-md bg-gray-500 text-white hover:bg-gray-400">
          Reply
        </button>
        <button className="flex items-center justify-center duration-100 shadow-md gap-2 px-6 py-5 mx-2 text-[1.3rem] rounded-md border border-green-500 text-green-500 hover:bg-green-200">
          Forward
        </button>
        <button className="flex items-center justify-center duration-100 shadow-md gap-2 px-6 py-5 mx-2 text-[1.3rem] rounded-md border border-red-500 text-red-500 hover:bg-red-200">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MailDetailButton;
