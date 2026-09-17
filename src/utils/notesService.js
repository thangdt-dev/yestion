import { supabase } from "./supase";

const createNote = async () => {
    const { data, error } = await supabase
        .from('notes')
        .insert({})
        .select()
        .single()

    if (error) throw error
    return data
}

const getAllNotes = async () => {
    const { data, error } = await supabase
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) throw error
    return data
}

const getNoteById = async (id) => {
    const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('id', id)
        .single()

    if (error) throw error
    return data
}

export { createNote, getAllNotes, getNoteById }