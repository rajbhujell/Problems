export default function Unpaid() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover block"
        autoPlay
        loop
        muted={false}
        controls
      >
        <source src="/un-paid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
