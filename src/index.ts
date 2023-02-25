import {usersArr, IArr1} from "./users";
import {usersInfoArr, IArr2, IOrg} from "./userInfo";

interface INewArr{
    name: string
    position: string
    age: number
    gender?: 'man'| 'woman'
}

function getUsersJobPositions(usersArray: IArr1[], usersInfoArr: IArr2[]): INewArr[]{
    let arrUser: INewArr[] = []
    for(let i=0; i<usersArr.length; i++){
        const {name, gender}: IArr1 = usersArr[i];
        const {organization: {position}, age}: IArr2 = usersInfoArr[i];
        const objUser: INewArr = {
            name: name,
            position: position,
            age: age,
            gender: 'man'
        };
        //console.log(objUser)
        arrUser.push(objUser);
    }
    return arrUser;
}

const usersPositions = getUsersJobPositions(usersArr, usersInfoArr);
console.log('userPositions', usersPositions)