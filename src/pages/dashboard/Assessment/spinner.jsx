const Spinner = () => (
    <div className="fixed inset-0 flex justify-center items-center bg-transparent z-50">
      {/* Spinner Circle */}
      <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-blue-500"></div>
    </div>
  );
  
  export default Spinner;