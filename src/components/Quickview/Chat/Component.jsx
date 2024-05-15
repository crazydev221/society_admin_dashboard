import React, { useState } from 'react'

import ChatHeader from './ChatHeader';
import ChatGroupItems from './ChatGroupItems';
import Conversation from './Conversation/Component';

const Component = () => {
    const [viewChat, setViewChat] = useState(false);
    return (
        <div className={`view-port clearfix ${viewChat ? " push-parrallax" : ""}`} id="chat">
            <div className="view bg-white">
                { /* BEGIN View Header */}
                <ChatHeader
                    list="Chat List"
                    show="Show All" />
                { /* END View Header */}

                <div data-init-list-view="ioslist" className="list-view boreded no-top-border" style={{ overflow: 'auto', height: '100%' }}>
                    {/* BEGIN chat group a */}
                    <ChatGroupItems
                        header="a"
                        chats={[
                            { name: "ava flores", image: "../../assets/img/profiles/1.jpg", imageExt: "../../assets/img/profiles/1x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} />
                    {/* END chat group a */}
                    {/* BEGIN chat group b */}
                    {/* <ChatGroupItems
                        header="b"
                        chats={[
                            { name: "bella mccoy", image: "../../assets/img/profiles/2.jpg", imageExt: "../../assets/img/profiles/2x.jpg", message: "Hello there", click: setViewChat },
                            { name: "bob stephens", image: "../../assets/img/profiles/3.jpg", imageExt: "../../assets/img/profiles/3x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group b */}
                    {/* BEGIN chat group c */}
                    {/* <ChatGroupItems
                        header="c"
                        chats={[
                            { name: "carole roberts", image: "../../assets/img/profiles/4.jpg", imageExt: "../../assets/img/profiles/4x.jpg", message: "Hello there", click: setViewChat },
                            { name: "christopher perez", image: "../../assets/img/profiles/5.jpg", imageExt: "../../assets/img/profiles/5x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group c */}
                    {/* BEGIN chat group d */}
                    {/* <ChatGroupItems
                        header="d"
                        chats={[
                            { name: "danielle fletcher", image: "../../assets/img/profiles/6.jpg", imageExt: "../../assets/img/profiles/6x.jpg", message: "Hello there", click: setViewChat },
                            { name: "david sutton", image: "../../assets/img/profiles/7.jpg", imageExt: "../../assets/img/profiles/7x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group d */}
                    {/* BEGIN chat group e */}
                    {/* <ChatGroupItems
                        header="e"
                        chats={[
                            { name: "earl hamilton", image: "../../assets/img/profiles/8.jpg", imageExt: "../../assets/img/profiles/8x.jpg", message: "Hello there", click: setViewChat },
                            { name: "elaine lawrence", image: "../../assets/img/profiles/9.jpg", imageExt: "../../assets/img/profiles/9x.jpg", message: "Hello there", click: setViewChat },
                            { name: "ellen grant", image: "../../assets/img/profiles/1.jpg", imageExt: "../../assets/img/profiles/1x.jpg", message: "Hello there", click: setViewChat },
                            { name: "erik taylor", image: "../../assets/img/profiles/2.jpg", imageExt: "../../assets/img/profiles/2x.jpg", message: "Hello there", click: setViewChat },
                            { name: "everett wagner", image: "../../assets/img/profiles/3.jpg", imageExt: "../../assets/img/profiles/3x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group e */}
                    {/* BEGIN chat group f */}
                    {/* <ChatGroupItems
                        header="f"
                        chats={[
                            { name: "freddie gomez", image: "../../assets/img/profiles/4.jpg", imageExt: "../../assets/img/profiles/4x.jpg", message: "Hello there", click: setViewChat },
                            { name: "Faizan lawrence", image: "../../assets/img/profiles/5.jpg", imageExt: "../../assets/img/profiles/5x.jpg", message: "Hello there", click: setViewChat },
                            { name: "Flink grant", image: "../../assets/img/profiles/6.jpg", imageExt: "../../assets/img/profiles/6x.jpg", message: "Hello there", click: setViewChat },
                            { name: "Fin taylor", image: "../../assets/img/profiles/7.jpg", imageExt: "../../assets/img/profiles/7x.jpg", message: "Hello there", click: setViewChat },
                            { name: "Fazil wagner", image: "../../assets/img/profiles/8.jpg", imageExt: "../../assets/img/profiles/8x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group f */}
                    {/* BEGIN chat group g */}
                    {/* <ChatGroupItems
                        header="g"
                        chats={[
                            { name: "glen jensen", image: "../../assets/img/profiles/4.jpg", imageExt: "../../assets/img/profiles/4x.jpg", message: "Hello there", click: setViewChat },
                            { name: "gwendolyn walker", image: "../../assets/img/profiles/5.jpg", imageExt: "../../assets/img/profiles/5x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group g */}
                    {/* BEGIN chat group j */}
                    {/* <ChatGroupItems
                        header="j"
                        chats={[
                            { name: "glen jensen", image: "../../assets/img/profiles/4.jpg", imageExt: "../../assets/img/profiles/4x.jpg", message: "Hello there", click: setViewChat },
                            { name: "gwendolyn walker", image: "../../assets/img/profiles/5.jpg", imageExt: "../../assets/img/profiles/5x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group j */}
                    {/* BEGIN chat group k */}
                    <ChatGroupItems
                        header="k"
                        chats={[
                            { name: "kim martinez", image: "../../assets/img/profiles/4.jpg", imageExt: "../../assets/img/profiles/4x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} />
                    {/* END chat group k */}
                    {/* BEGIN chat group l */}
                    {/* <ChatGroupItems
                        header="l"
                        chats={[
                            { name: "lawrence white", image: "../../assets/img/profiles/9.jpg", imageExt: "../../assets/img/profiles/9x.jpg", message: "Hello there", click: setViewChat },
                            { name: "leroy bell", image: "../../assets/img/profiles/1.jpg", imageExt: "../../assets/img/profiles/1x.jpg", message: "Hello there", click: setViewChat },
                            { name: "letitia carr", image: "../../assets/img/profiles/2.jpg", imageExt: "../../assets/img/profiles/2x.jpg", message: "Hello there", click: setViewChat },
                            { name: "lucy castro", image: "../../assets/img/profiles/3.jpg", imageExt: "../../assets/img/profiles/3x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group k */}
                    {/* BEGIN chat group m */}
                    {/* <ChatGroupItems
                        header="m"
                        chats={[
                            { name: "mae hayes", image: "../../assets/img/profiles/4.jpg", imageExt: "../../assets/img/profiles/4x.jpg", message: "Hello there", click: setViewChat },
                            { name: "marilyn owens", image: "../../assets/img/profiles/5.jpg", imageExt: "../../assets/img/profiles/5x.jpg", message: "Hello there", click: setViewChat },
                            { name: "marlene cole", image: "../../assets/img/profiles/6.jpg", imageExt: "../../assets/img/profiles/6x.jpg", message: "Hello there", click: setViewChat },
                            { name: "marsha warren", image: "../../assets/img/profiles/7.jpg", imageExt: "../../assets/img/profiles/7x.jpg", message: "Hello there", click: setViewChat },
                            { name: "marsha dean", image: "../../assets/img/profiles/8.jpg", imageExt: "../../assets/img/profiles/8x.jpg", message: "Hello there", click: setViewChat },
                            { name: "mia diaz", image: "../../assets/img/profiles/9.jpg", imageExt: "../../assets/img/profiles/9x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group m */}
                    {/* BEGIN chat group n */}
                    {/* <ChatGroupItems
                        header="n"
                        chats={[
                            { name: "noah elliott", image: "../../assets/img/profiles/1.jpg", imageExt: "../../assets/img/profiles/1x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group n */}
                    {/* BEGIN chat group p */}
                    {/* <ChatGroupItems
                        header="p"
                        chats={[
                            { name: "phyllis hamilton", image: "../../assets/img/profiles/2.jpg", imageExt: "../../assets/img/profiles/2x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group p */}
                    {/* BEGIN chat group r */}
                    {/* <ChatGroupItems
                        header="r"
                        chats={[
                            { name: "raul rodriquez", image: "../../assets/img/profiles/3.jpg", imageExt: "../../assets/img/profiles/3x.jpg", message: "Hello there", click: setViewChat },
                            { name: "rhonda barnett", image: "../../assets/img/profiles/4.jpg", imageExt: "../../assets/img/profiles/4x.jpg", message: "Hello there", click: setViewChat },
                            { name: "roberta king", image: "../../assets/img/profiles/5.jpg", imageExt: "../../assets/img/profiles/5x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group r */}
                    {/* BEGIN chat group s */}
                    {/* <ChatGroupItems
                        header="s"
                        chats={[
                            { name: "scott armstrong", image: "../../assets/img/profiles/6.jpg", imageExt: "../../assets/img/profiles/6x.jpg", message: "Hello there", click: setViewChat },
                            { name: "sebastian austin", image: "../../assets/img/profiles/7.jpg", imageExt: "../../assets/img/profiles/7x.jpg", message: "Hello there", click: setViewChat },
                            { name: "sofia davis", image: "../../assets/img/profiles/8.jpg", imageExt: "../../assets/img/profiles/8x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group s */}
                    {/* BEGIN chat group s */}
                    {/* <ChatGroupItems
                        header="s"
                        chats={[
                            { name: "scott armstrong", image: "../../assets/img/profiles/6.jpg", imageExt: "../../assets/img/profiles/6x.jpg", message: "Hello there", click: setViewChat },
                            { name: "sebastian austin", image: "../../assets/img/profiles/7.jpg", imageExt: "../../assets/img/profiles/7x.jpg", message: "Hello there", click: setViewChat },
                            { name: "sofia davis", image: "../../assets/img/profiles/8.jpg", imageExt: "../../assets/img/profiles/8x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group s */}
                    {/* BEGIN chat group t */}
                    {/* <ChatGroupItems
                        header="t"
                        chats={[
                            { name: "terrance young", image: "../../assets/img/profiles/9.jpg", imageExt: "../../assets/img/profiles/9x.jpg", message: "Hello there", click: setViewChat },
                            { name: "theodore woods", image: "../../assets/img/profiles/1.jpg", imageExt: "../../assets/img/profiles/1x.jpg", message: "Hello there", click: setViewChat },
                            { name: "todd wood", image: "../../assets/img/profiles/2.jpg", imageExt: "../../assets/img/profiles/2x.jpg", message: "Hello there", click: setViewChat },
                            { name: "tommy jenkins", image: "../../assets/img/profiles/3.jpg", imageExt: "../../assets/img/profiles/3x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group t */}
                    {/* BEGIN chat group w */}
                    {/* <ChatGroupItems
                        header="w"
                        chats={[
                            { name: "wilma hicks", image: "../../assets/img/profiles/4.jpg", imageExt: "../../assets/img/profiles/4x.jpg", message: "Hello there", click: setViewChat }
                        ]}
                        click={setViewChat} /> */}
                    {/* END chat group w */}
                </div>
            </div>
            { /* BEGIN Conversation View  */}
            <Conversation click={setViewChat} />
            { /* END Conversation View  */}
        </div>
    )
}

export default Component
