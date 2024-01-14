export async function uploadFile(file){
    const data = new FormData();
    data.append('file', file);
    const response = await fetch(`${import.meta.env.VITE_FILE_MANAGER_API_HOST}/filemanager/upload`, {
        method: 'POST',
        body: data
    });
    const result = await response.json();
    return result;
}