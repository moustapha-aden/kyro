function Partenaire() {
  const partenaires = [
    "Cisco",
    "Fortinet",
    "Microsoft",
    "Huawei",
    "Dell",
    "AWS",
    "Oracle",
    "VMware",
  ];

  return (
    <div className="px-5 pt-8 pb-10">
         <div className="mb-10">
     <h2 className="text-center tracking-tighter text-xl leading-none"> Soutenu par des investisseurs et des opérateurs de premier plan </h2>
     </div>
    <div className="overflow-hidden mask-l-from-90%  mask-r-from-90%">
      <div className="flex animate-marquee space-x-10">
   
        {partenaires.concat(partenaires).map((item, index) => (
          <div key={index} className="md:w-24 md:h-24  w-12 h-12 shrink-0">
          {item}
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
     </div>
  );
}

export default Partenaire;