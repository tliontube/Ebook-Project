/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import MyContext from './myContext';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

function MyState({ children }) {
    // Loading State 
    const [loading, setLoading] = useState(false);

    // Order State 
    const [getAllOrder, setGetAllOrder] = useState([]);


    /**========================================================================
     *                           GET All Order Function
     *========================================================================**/

    const getAllOrderFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "orders"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let orderArray = [];
                QuerySnapshot.forEach((doc) => {
                    orderArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllOrder(orderArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }


    // Delete oder Function
    const orderDelete = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'orders', id))
            toast.success('Order Deleted successfully')
            getAllOrderFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    // user State 
    const [getAllUser, setGetAllUser] = useState([]);


    /**========================================================================
     *                           GET All User Function
     *========================================================================**/

    const getAllUserFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "user"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let userArray = [];
                QuerySnapshot.forEach((doc) => {
                    userArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllUser(userArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {    
        getAllOrderFunction();
        getAllUserFunction();
    }, []);
    return (
        <MyContext.Provider value={{
            loading,
            setLoading,
            getAllOrder,
            orderDelete,
            getAllUser
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState