import React from "react";
import style from './Profile.module.scss'

class ProfileStatus extends React.Component{

    statusRef = React.createRef()

    state = {editMode: false,}

    activateEditMode = () =>{this.setState({editMode: true})}

    updateStatus = () =>{
        this.setState({editMode: false})
        this.props.updateUserStatus(this.statusRef.current.value)
    }

    deactivateEditeMode = () =>{
        this.setState({editMode: false})
        this.props.updateUserStatus(this.statusRef.current.value)
    }

    render() {
        return(
            <>
                {
                    this.state.editMode
                        ?
                        <>
                            <input onBlur={this.deactivateEditeMode} ref={this.statusRef} type="text" className={style.statusInput}  autoFocus={true}/>
                            <button onClick={this.updateStatus}>Сохранить</button>
                        </>
                        :
                        <>
                            <p onDoubleClick={this.activateEditMode} className={!this.props.status ? style.noStatus : style.status}>{!this.props.status ? 'введите ваш статус' : this.props.status}</p>
                        </>
                }
            </>
        )
    }
}

export default ProfileStatus;