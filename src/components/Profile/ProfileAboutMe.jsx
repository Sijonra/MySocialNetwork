import React from "react";
import style from './Profile.module.scss'

class ProfileAboutMe extends React.Component{

    state = {editMode: false,}

    activateEditMode = () =>{this.setState({editMode: true})}

    deactivateEditeMode = () =>{this.setState({editMode: false})}

    render() {
        return(
            <>
                {
                    this.state.editMode
                        ?
                        <>
                            <input type="text" className={style.statusInput} onBlur={this.deactivateEditeMode} autoFocus={true}/>
                        </>
                        :
                        <>
                            <p onClick={this.activateEditMode} className={!this.props.aboutMe ? style.noStatus : style.status}>{!this.props.aboutMe ? 'напишите о себе' : this.props.aboutMe}</p>
                        </>
                }
            </>
        )
    }
}

export default ProfileAboutMe;