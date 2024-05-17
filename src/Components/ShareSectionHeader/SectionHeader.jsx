const SectionHeader = ({heading, subHeading}) => {
    return (
        <div className="text-center border-y-2 p-4 w-4/12 mx-auto my-10">
            <p className="text-yellow-600">---{subHeading}---</p>
            <h3 className="uppercase text-2xl">{heading}</h3>
        </div>
    );
};

export default SectionHeader;