import Navbar from "../Multipage/Navbar/Navbar";

import React from 'react';
import {
    Card, CardImg, CardText,
    Row, Col, Button, List
} from 'reactstrap';

const Classification = () => {
    return (
        <>
            <Navbar />
            <container align="center">
             <h1>CLASSIFICATION</h1>
            <p>The film classification system in the UK is dictated by the rating system provided by the British Board of Film Classification (BBFC).
                The BBFC has been rating the motion pictures and home video since as early as 1912 and their ratings are comprised of 7 categories. 
                These catagories and their guideliness are displayed and described below.
            </p>
            </container>
            <div id="dropped-box" className="container-fluid">
                <Row>


                    <Col sm="6">
                        <h3 align="center">U Universal - Suitable for all</h3> <br />
                        <CardImg src="https://static.wikia.nocookie.net/rating-system/images/8/88/BBFC_U.svg" alt="U Universal - Suitable for all"></CardImg>
                        <Card body>
                            <CardText> A U rated film has to be suitable for an audience of all ages.
                            The film also has to follow the following guideliness on these matters;
              <List>
                                    <ul>
                                        <br />
                                        <li>Dangerous Behaviour: Bad/anti-social behaviour that could encourage young children should be discouraged.          </li>
                                        <li>Discimination: Is unacceptable, unless strongly discouraged.</li>
                                        <li>Drugs: Unless it is used for educational purposes or displayed as innocuous.</li>
                                        <li>Language: Only mild bad language few and far between.</li>
                                        <li>Nudity: Shouldn't be used in a sexual tone and shouldn't be frequent.</li>
                                        <li>Sex: Shouldn't be used in a sexual tone and shouldn't be frequent.</li>
                                        <li>Threat and Horror: Horror scenes should be toned down in the horror aspect and shouldn't last on the screen for long.
            The aftermath has to be pleasant or reassuring.</li>
                                        <li><li>Violence: Should be very mild, but mild use of violence is permissible given an appropirate context like cartoonish, comedic, etc.</li></li>
                                    </ul>
                                </List>

                            </CardText>

                            <Button id="infoButton" type="button" href="https://www.bbfc.co.uk/rating/u">For more info on 'U Universal' rating.</Button>
                        </Card>
                    </Col>

                    <Col sm="6">
                        <h3 align="center">PG Parental Guidance</h3> <br />
                        <CardImg src="https://static.wikia.nocookie.net/rating-system/images/b/b5/BBFC_PG.svg" alt="PG Parental Guidance"></CardImg>
                        <Card body>

                            <CardText>A PG rated film is a film where parental guidance is suggested.
                            SHould be suitable for general viewing and should not have scenes that may unsettle a child of an age around 8 years.
              <List>
                                    <ul>
                                        <br />
                                        <li>Dangerous Behaviour: Dangerous behaviour that could encourage children to imitate should be avoided, especially if these actions are depicted as fun.
              No glorifying of weapons such as knives.          </li>
                                        <li>Discimination: Is unacceptable unless discouraged, used as educational or depicted in historical context.
                                        Discrimination by characters or individuals that may appeal to children is likely to be unacceptable.
          </li>
                                        <li>Drugs: Unless it is used for educational purposes or displayed as innocuous.</li>
                                        <li>Language: Very moderated use of mild bad language.</li>
                                        <li>Nudity: Shouldn't be used in a sexual tone.</li>
                                        <li>Sex: May be implied but should not be frequent.</li>
                                        <li>Threat and Horror: Horror scenes should not last for a considerable time or be intense.</li>
                                        <li>Violence: Should be mild, but moderated use of violence is permissible given an appropirate context like history, etc.</li>
                                    </ul>
                                </List>

                            </CardText>
                            <Button id="infoButton" type="button" href="https://www.bbfc.co.uk/rating/pg">For more info on 'PG Parental Guidance' rating.</Button>
                        </Card>
                    </Col>

                    <Col sm="6">
                        <h3 align="center">12A – Suitable for 12 years and over</h3> <br />
                        <CardImg src="https://static.wikia.nocookie.net/rating-system/images/8/87/BBFC_12A.svg" alt="12A – Suitable for 12 years and over"></CardImg>
                        <Card body>

                            <CardText>A 12A rated film should not be suitable for children under the age of 12.
                            Children under the age of 12 who wish to see the film must do so with an adult, who should take consideration about the content of the film.
                            The 12A rating is for cinema only.
          </CardText>

                            <List>
                                <ul>
                                    <br />
                                    <li>Dangerous Behaviour: Dangerous behaviour that could encourage children to imitate should be avoided, especially if these actions are depicted as fun.
              No glorifying of weapons such as knives. Anti-social behaviour should not be promoted.       </li>
                                    <li>Discimination: The film as a whole should not endorse discrimination. Strong discriminatory language should not be present unless strongly condemned.
          </li>
                                    <li>Drugs: Drug abuse should not be frequent or promoted.</li>
                                    <li>Language: Moderate bad language is permissible while strong bad language is permissible given the right context and as long as it is not frequent.</li>
                                    <li>Nudity: May be present, but if used as sexual content it must be discreet and brief.</li>
                                    <li>Sex:Sexual references may be present as long as they aren't frequent. Sex acts may also be present as long as they are discreet and brief.</li>
                                    <li>Threat and Horror: Horror scenes may be present as long as it is moderate.</li>
                                    <li>Violence: Moderate violence is permissible. Infrequent strong violent scenes are permissible as long as there is a proper context.</li>
                                </ul>
                            </List>
                            <Button id="infoButton" type="button" href="https://www.bbfc.co.uk/rating/12">For more info on '12A – Suitable for 12 years and over' rating.</Button>
                        </Card>
                    </Col>

                    <Col sm="6">
                        <br /><h3 align="center">12 – Suitable for 12 years and over</h3> <br />
                        <CardImg src="https://static.wikia.nocookie.net/rating-system/images/8/84/BBFC_12.svg" alt="12 – Suitable for 12 years and over"></CardImg>
                        <Card body>
                            <CardText>A 12 rated film should not be suitable for children under the age of 12.
                            Children under the age of 12 who wish to see the film must do so with an adult, who should take consideration about the content of the film.
                            The 12 rating is for video only.
              </CardText>
                            <List>
                                <ul>
                                    <br />
                                    <li>Dangerous Behaviour: Dangerous behaviour that could encourage children to imitate should be avoided, especially if these actions are depicted as fun.
              No glorifying of weapons such as knives. Anti-social behaviour should not be promoted.       </li>
                                    <li>Discimination: The film as a whole should not endorse discrimination. Strong discriminatory language should not be present unless strongly condemned.
          </li>
                                    <li>Drugs: Drug abuse should not be frequent or promoted.</li>
                                    <li>Language: Moderate bad language is permissible while strong bad language is permissible given the right context and as long as it is not frequent.</li>
                                    <li>Nudity: May be present, but if used as sexual content it must be discreet and brief.</li>
                                    <li>Sex:Sexual references may be present as long as they aren't frequent. Sex acts may also be present as long as they are discreet and brief.</li>
                                    <li>Threat and Horror: Horror scenes may be present as long as it is moderate.</li>
                                    <li>Violence: Moderate violence is permissible. Infrequent strong violent scenes are permissible as long as there is a proper context.</li>
                                </ul>
                            </List>
                            <Button id="infoButton" type="button" href="https://www.bbfc.co.uk/rating/12">For more info on '12 – Suitable for 12 years and over' rating.</Button>
                        </Card>
                    </Col>

                    <Col sm="6">
                        <h3 align="center">15 – Suitable only for 15 years and over</h3> <br />
                        <CardImg src="https://static.wikia.nocookie.net/rating-system/images/0/03/BBFC_15.svg" alt="15 – Suitable only for 15 years and over"></CardImg>
                        <Card body>
                            <CardText>A 15 rated film should not be seen by children under the age of 15 at the cinema, nor be bought or rented by them.
                            </CardText>
                            <List>
                                <ul>
                                    <br />
                                    <li>Dangerous Behaviour: Dangerous behaviour like suicide, self harm, etc. should not be promoted or displayed in such detail that it may be imitated.
                                        Ease of access of weapons should only be displayed if the context is justified.   </li>
                                    <li>Discimination: The film as a whole should not endorse discrimination. Strong discriminatory language may be present as long as it is not endorsed in the film.
          </li>
                                    <li>Drugs: Drug abuse can be present as long as it is not encouraged or promoted.
                                    Abuse of easily accessible drugs is likely to be unacceptable.
                                    </li>
                                    <li>Language: Strong language may be present. Very strong language is permissible as long as the context is justified and is infrequent.</li>
                                    <li>Nudity: Non-sexual nudity is permissible as well as if it is educational. Sexual nudity is permissible as long as it is brief and not in detail.</li>
                                    <li>Sex: Sexual activity is permssible as long as it is not strongly detailed. Strong sexual language is permissible but should not be frequent, especially dialoge regarding pornographic detail.
                                    The film should not be purposefully sexual in tone.
                                    </li>
                                    <li>Sexual Violence and Sexual Threat: Can be referred, but very strong sexual violence shall not be present in detail.
                                     </li>
                                    <li>Threat and Horror: Strong horror scenes can be present but sadistic horror threats are not permissible.</li>
                                    <li>Violence: Strong violence is permissible but the film should not focus on injury or the aspect of infilciting pain.
                                        Strong gore and sadistic violence is not permissible.</li>
                                </ul>
                            </List>

                            <Button id="infoButton" type="button" href="https://www.bbfc.co.uk/rating/15">For more info on '15 – Suitable only for 15 years and over' rating.</Button>
                        </Card>
                    </Col>


                    <Col sm="6">
                        <br /><h3 align="center">18 – Suitable only for adults</h3> <br />
                        <CardImg src="https://static.wikia.nocookie.net/rating-system/images/9/9f/BBFC_18.svg" alt="18 – Suitable only for adults"></CardImg>
                        <Card body>
                            <CardText>With supporting text below as a natural lead-in to additional content.
                            A rated 18 movie is unrestricted in a majority of the aspects and themes but there are exceptions;
                            </CardText>
                            <List>
                                <ul>
                                    <li>The material should not break the law or created through the commision of a criminal offence.</li>
                                    <li> The material should have individuals or society, such as promotion of rape, sadistic violence, etc.</li>
                                    <li> Presence of overly explicit sexual content.</li>
                                </ul>

                            </List>
                            <Button id="infoButton" type="button" href="https://www.bbfc.co.uk/rating/18">For more info on '18 – Suitable only for adults' rating.</Button>
                        </Card>
                    </Col>

                    <Col sm="6">
                        <br /><h3 align="center">R18 - Adult works for licensed premises only</h3> <br />
                        <CardImg src="https://static.wikia.nocookie.net/rating-system/images/9/90/BBFC_R18.svg" alt="18 – Adult works for licensed premises only"></CardImg>
                        <Card body>
                            <CardText>The R18 film category is a legally restricted classification for works including strong sexual content.
                            These films can only be should in specially licensed cinemas and may only be distributed in licensed sex shops.
                            These works may not be supplied by mail order and will be filtered out of main publicly available search services unless adult content is enabled.

                            </CardText>
                            <Button href="https://www.bbfc.co.uk/rating/r18">For more info on '18 – Adult works for licensed premises only' rating.</Button>
                        </Card>
                    </Col>


                </Row>

            </div>
        </>
    );
};

export default Classification;