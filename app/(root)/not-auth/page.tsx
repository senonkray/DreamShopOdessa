import { InfoBlock } from '@/shared/components';

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="Вибач, тобі сюди не можна."
        text="Спочатку нам потрібно подружитися, це не займе багато часу!😊"
        imageUrl="/assets/images/lock.png"
      />
    </div>
  );
}
