import React from 'react';
import './Maincontent.scss';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { CurrencyEuro, ArrowRightSquareFill, Pencil, Cash, Shield } from 'react-bootstrap-icons';

function Maincontent() {
    return (
        <div className='container-fluid'>
            <div className='row head'>
                <div className='col-lg-6 col-md-6 col-sm-12 head1'><h2>Lorem Ipsum dolor sit amet</h2></div>
                <div className='col-lg-6 col-md-6 col-sm-12 head2' style={{ textAlign: 'right' }} >
                    
                    <Button variant="outline-warning" style={{marginRight:"20px"}}>Lorem Ipsum</Button>
                    <Button variant="secondary">Lorem Ipsum</Button>
                </div>
            </div>
            <div className='row'>
                <div className='col col-xs-12 col-sm-12 col-md-3'>
                    <div className='row'>
                        <Card >
                             <Card.Body style={{padding:"10px 0"}}>
                                <Card.Title style={{ borderBottom: '1px solid #D3D3D3', lineHeight: '1.8em' }}>LOrem Ipsum <Pencil style={{ color: 'red', float: 'right' }} /></Card.Title>

                                <div className='col'>
                                    <div className='row' style={{borderBottom:"1px solid #d3d3d3"}}>
                                    <div className='col col-xs-12 col-sm-12 col-md-6 b-right'>
                                        <h4 style={{ color: "#D3D3D3" }}>Lorem Ipsum</h4>
                                        <span className='editable_text'><Pencil /> Lorem Ipsum</span>
                                    </div>
                                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                                        <h4 style={{ color: "#D3D3D3" }}>Lorem Ipsum</h4>
                                        <span><Shield /> Lorem Ipsum</span>
                                    </div>
                                    </div>
                                    <div className='row' style={{borderBottom:"1px solid #d3d3d3"}}>
                                     <div className='col col-xs-12 col-sm-12 col-md-6 b-right'>
                                        <h4 style={{ color: "#D3D3D3" }}>Lorem Ipsum</h4>
                                        <span><Cash /> Lorem</span>

                                    </div>
                                    <div className='col col-xs-12 col-sm-12 col-md-6'>
                                        <h4 style={{ color: "#D3D3D3" }}>Lorem Ipsum</h4>
                                        <span><Cash /> 0.000.000,00</span>
                                    </div>
                                    </div>
                                </div>

                                

                            </Card.Body>
                        </Card>
                    </div>
                    <div className='row'>
                        <Card>

                            <Card.Body style={{padding:"10px "}}>
                                <Card.Title style={{ borderBottom: '1px solid #D3D3D3', lineHeight: '1.8em' }}>LOrem Ipsum <Pencil style={{ color: 'red', float: 'right' }} /></Card.Title>

                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button id="bt1" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Lorem ipsum
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Lorem ipsum 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button id="bt2" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Lorem ipsum
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Lorem ipsum
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button id="bt3" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Lorem ipsum
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Lorem ipsum
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ position: "relative" }}><Button variant="outline-warning" style={{ width: "100%" }}>Lorem Ipsum</Button></div>



                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <div className='col col-xs-12 col-sm-12 col-md-9'>
                    <div className='row'>
                           <div className='col col-xs-12 col-sm-12 col-md-6'> 
                           <Card>
                            <Card.Body>
                            <Card.Title><CurrencyEuro />0.000.000,00</Card.Title>
                            <Card.Text style={{ color: "#D3D3D3" }}>
                                Lorem Ipsum dolor sit amet
                            </Card.Text>

                            </Card.Body>
                            </Card>

                           </div>
                           <div className='col col-xs-12 col-sm-12 col-md-6'>
                           <Card>
                            <Card.Body>
                            <Card.Title><CurrencyEuro />0.000.000,00</Card.Title>
                            <Card.Text style={{ color: "#D3D3D3" }}>
                                Lorem Ipsum dolor sit amet
                            </Card.Text>

                            </Card.Body>
                            </Card>

                           </div>

                    </div>
                    <div className='row row-cols-5 lcards'>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col col-xs-12">
                            <Card>
                                <Card.Body>
                                <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
                                <Card.Title>Lorem Ipsum</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                       
                         
                         
                    </div>

                </div>

            </div>

        </div>
        // <div className='Main'>
        //     <div className='mainleft'>

        //         <div className='mltop'>
        //             <div>
        //                 <Card>

        //                     <Card.Body>
        //                         <Card.Title style={{ borderBottom: '1px solid #D3D3D3', lineHeight: '1.8em' }}>LOrem Ipsum <Pencil style={{ color: 'red', float: 'right' }} /></Card.Title>

        //                         <div className='cardedit'>
        //                             <div id="element">
        //                                 <h4 style={{ color: "#D3D3D3" }}>Lorem Ipsum</h4>
        //                                 <span onclick="spanSwitch(this)"><Pencil /> Lorem Ipsum</span>
        //                             </div>
        //                             <div>
        //                                 <h4 style={{ color: "#D3D3D3" }}>Lorem Ipsum</h4>
        //                                 <span><Shield /> Lorem Ipsum</span>
        //                             </div>
        //                             <div>
        //                                 <h4 style={{ color: "#D3D3D3" }}>Lorem Ipsum</h4>
        //                                 <span><Cash /> Lorem</span>

        //                             </div>
        //                             <div>
        //                                 <h4 style={{ color: "#D3D3D3" }}>Lorem Ipsum</h4>
        //                                 <span><Cash /> 0.000.000,00</span>
        //                             </div>


        //                         </div>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //         </div>

        //         <div className='mlbottom' style={{ marginTop: "8px" }}>

        //             <div>
        //                 <Card>

        //                     <Card.Body>
        //                         <Card.Title style={{ borderBottom: '1px solid #D3D3D3', lineHeight: '1.8em' }}>LOrem Ipsum <Pencil style={{ color: 'red', float: 'right' }} /></Card.Title>

        //                         <div class="accordion" id="accordionExample">
        //                             <div class="accordion-item">
        //                                 <h2 class="accordion-header" id="headingOne">
        //                                     <button id="bt1" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //                                         Lorem ipsum
        //                                     </button>
        //                                 </h2>
        //                                 <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        //                                     <div class="accordion-body">
        //                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div class="accordion-item">
        //                                 <h2 class="accordion-header" id="headingTwo">
        //                                     <button id="bt2" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        //                                         Lorem ipsum
        //                                     </button>
        //                                 </h2>
        //                                 <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        //                                     <div class="accordion-body">
        //                                         Lorem ipsum
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div class="accordion-item">
        //                                 <h2 class="accordion-header" id="headingThree">
        //                                     <button id="bt3" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        //                                         Lorem ipsum
        //                                     </button>
        //                                 </h2>
        //                                 <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        //                                     <div class="accordion-body">
        //                                         Lorem ipsum
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div style={{position:"relative"}}><Button variant="outline-warning" style={{width:"100%"}}>Lorem Ipsum</Button></div>



        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='mainright'>
        //         <div className='mrtop'>
        //             <div>
        //                 <Card>

        //                     <Card.Body>
        //                         <Card.Title><CurrencyEuro />0.000.000,00</Card.Title>
        //                         <Card.Text style={{ color: "#D3D3D3" }}>
        //                             Lorem Ipsum dolor sit amet
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div>
        //                 <Card>

        //                     <Card.Body>
        //                         <Card.Title><CurrencyEuro />0.000.000,00</Card.Title>
        //                         <Card.Text style={{ color: "#D3D3D3" }}>
        //                             Lorem Ipsum dolor sit amet
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>

        //         </div>
        //         <div className='mrbottom'>

        //             <div className='btcards' id='card1'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card2'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card3'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card4'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card5'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card6'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card7'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card8'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card9'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card10'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card11'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card12'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //             <div className='btcards' id='card13'>
        //                 <Card>

        //                     <Card.Body>
        //                         <ArrowRightSquareFill size={50} style={{ marginBottom: "15px" }} />
        //                         <Card.Title>Lorem Ipsum</Card.Title>
        //                         <Card.Text>
        //                             Lorem ipsum dolor sit amet, consectetur adipiscing elit..
        //                         </Card.Text>

        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    );
}

export default Maincontent;