import React from 'react';
import style from './css.module.css';
import User from "./User/Users";
import {stateUsersType, UserType} from "../../../Redux/UsersPage-Reducer";
import photo from "./5.svg"
import {Redirect} from "react-router-dom";

type UsersPropsType =
    {
        UserPage: stateUsersType
        isLoadingStatus: boolean
        pagesCount: number
        currentPage: number
        maxUsersOnPage: number
        totalCountPages: number
        startPaginatorPages: number,
        endPaginatorPages: number,
        isFollowingStatus: Array<number>
        follow: (userid: number) => void
        unfollow: (userid: number) => void
        setUsers: (users: Array<UserType>) => void
        setPage: (pageNumber: number) => void
    }

function Users(props: UsersPropsType) {
    let i = props.startPaginatorPages
    let pages: Array<any> = []

    let maxPages = Math.ceil(props.totalCountPages / props.maxUsersOnPage)
    for (i; i <= maxPages; i++) {
        pages[i] = i
    }
    const switchCurrentPage = (page: number) => {
        props.setPage(page)
    }
    return (
        <div className={style.container}>
            <div className={style.users}>


                {props.UserPage.users.map((u) => {
                    return <User id={u.id} followed={u.followed} name={u.name} photos={u.photos}
                                 status={u.status} location={u.location} follow={props.follow}
                                 unfollow={props.unfollow} isFollowingStatus={props.isFollowingStatus}/>
                })}

            </div>
            <div className={style.loading}>
                {props.isLoadingStatus ?
                    <img src={photo}/> :
                    <></>
                }
            </div>
            <div className={style.paginator}>
                {
                    pages.map((p) => {
                        if (p <= props.endPaginatorPages) {
                            return <button className={style.button}
                                           onClick={() => switchCurrentPage(p)}>
                                {p}
                            </button>
                        } else if (p === maxPages) {
                            return <>
                                <span>..</span>
                                <button className={style.button}
                                        onClick={() => switchCurrentPage(p)}
                                >{p}</button>
                            </>
                        }
                    })
                }
            </div>
        </div>

    )

}

export default Users;
