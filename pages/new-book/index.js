// our-dimain.com/new-meetup
import AddBookForm from '@/components/book/AddBookForm';
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

function AddBookPage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addMeetupHandler(enteredBookData)  {
        await globalCtx.updateGlobals({cmd: 'addBook', newVal: enteredBookData})
        router.push('/');
    }

    return <AddBookForm onAddBook={addMeetupHandler} />
}

export default AddBookPage