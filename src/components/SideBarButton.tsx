
const SideBarButton = (props: { img: string | undefined; name: string | undefined; } ) => {
    return <>
        <button onClick={() => alert(props.name)} className='flex items-center w-full  text-sm'>
            <img src={props.img} alt="" className="h-6 m-2"/> {props.name}
        </button>
    </>
}

export default SideBarButton;