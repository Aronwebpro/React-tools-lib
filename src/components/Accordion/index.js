import React from 'react';

import './accordion.css';

export default class Accordion extends React.Component {
    state = {
        isOpen: false,
        height: '0px',
    };

    render() {
        const { isOpen } = this.state;
        return (
            <>
                <section className='accordion-wrapper'>
                    <div className='accordion-header' onClick={this.open}>
                        <div className='plus-wrapper'>
                            <div className={`vertical ${isOpen ? 'vertical-open' : ''}`}/>
                            <div className="horizontal"/>
                        </div>
                        <h3>Header Title</h3>
                    </div>
                    <div className='accordion-inner' style={{ height: this.state.height }}>
                        <div className='inner-content' ref={this.innerContent}>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor, est non vulputate finibus,
                                    diam purus fermentum enim, quis pharetra urna magna sollicitudin est. Fusce aliquet magna quis
                                    massa lobortis maximus. Integer ut nibh eget turpis egestas dictum vel vitae est. Donec
                                    imperdiet, nisl et sollicitudin sollicitudin, eros nunc semper risus, sit amet iaculis tortor
                                    urna nec neque. Nulla sit amet commodo ipsum, in vehicula orci. In quis condimentum augue.
                                    Praesent vel velit ex. Quisque quis quam non elit molestie tincidunt eget eu eros. Nam luctus
                                    nisi et urna blandit, sit amet convallis dolor rhoncus. Nam lobortis urna eget malesuada
                                    dignissim.</p>
                                <p> Donec eu tempor enim. Nunc accumsan sem a mollis fermentum. Integer nec sodales justo. Nulla
                                    feugiat ut enim sollicitudin viverra. Donec quis volutpat diam. Praesent dapibus scelerisque
                                    dignissim. Praesent scelerisque elit ut posuere auctor. Donec scelerisque leo in nisl sodales
                                    ultrices. Aenean diam ipsum, malesuada sed elementum suscipit, lacinia ac quam.</p>
                                <p>In vel elementum elit, nec lacinia neque. Proin suscipit, ex commodo pulvinar pharetra, lectus
                                    magna accumsan risus, eget porta est ex a neque. Nam ut elit blandit ex malesuada congue.
                                    Mauris sit amet ligula eget orci consectetur iaculis. Cras lacinia bibendum enim, nec maximus
                                    velit dapibus a. Duis gravida lectus ultrices, mattis sapien non, congue neque. Proin
                                    porttitor augue at nisi condimentum imperdiet. Morbi elementum et lacus eu vulputate. Maecenas
                                    sed elit nec tellus commodo dictum. Donec ac sodales orci.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    innerContent = React.createRef();

    open = () => {
        if (this.state.isOpen) {
            this.setState({ height: '0px', isOpen: false });
        } else {
            this.setState({ height: `${this.innerContent.current.clientHeight + 20}px`, isOpen: true });
        }

    }
}