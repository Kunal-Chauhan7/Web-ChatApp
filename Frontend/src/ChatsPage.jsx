import { MultiChatSocket , useMultiChatLogic , MultiChatWindow } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatprops = useMultiChatLogic('e43efb58-1d84-42e8-a5ee-5a4467e122c7',
    props.user.username,
    props.user.secret
    );
    return (
        <div style={{height:'100vh'}}>   
        <MultiChatSocket{...chatprops} />
        <MultiChatWindow {...chatprops} style={{height:'100%'}} />
        </div>
    )
}
export default ChatsPage 