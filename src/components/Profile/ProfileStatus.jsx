import React from "react";
import style from './Profile.module.scss'

class ProfileStatus extends React.Component{

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
                            <p onClick={this.activateEditMode} className={!this.props.status ? style.noStatus : style.status}>{!this.props.status ? 'введите ваш статус' : this.props.status}</p>
                        </>
                }
            </>
        )
    }
}

export default ProfileStatus;