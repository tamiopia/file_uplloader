import React, { useState, useEffect } from 'react';
import './App.css';
import { FileInput, rem, Table, Button } from '@mantine/core';
import { CiFileOn } from "react-icons/ci";
import axios from 'axios';
import '@mantine/core/styles.css';

interface UploadedFile {
  id: number;
  fileName: string;
  fileSize: number;
  uploadedDate: string;
}

function App() {
  const icon = <CiFileOn style={{ width: rem(18), height: rem(18) }} />;
  
  const [files, setFiles] = useState<UploadedFile[]>([]);

  useEffect(() => {
    fetchFiles();
  }, []); // Fetch files when component mounts

  const fetchFiles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/files');
      if (response.data.status === 'success') {
        setFiles(response.data.data);
      } else {
        console.error('Error fetching files:', response.data);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const handleRemoveFile = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/files/${id}`);
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    } catch (error) {
      console.error('Error removing file:', error);
    }
  };

  return (
    <div className="App back trans h-[95vh] text-xl mx-9 rounded-lg">
      <div className='w-1/3 m-5'>
      <FileInput
          rightSection={icon}
          label="Upload File"
          placeholder="Upload File With Less than 10MB"
          rightSectionPointerEvents="none"
          mt="md"
          onChange={async (payload: File | null) => {
            if (payload) {
              if (payload.size > 10 * 1024 * 1024) {
                alert("File size must be less than 10MB");
                return;
              }
              const formData = new FormData();
              formData.append('file', payload);

              try {
                const response = await axios.post('http://localhost:5000/api/files/upload', formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });
                const uploadedFile: UploadedFile = {
                  id: response.data.id,
                  fileName: response.data.fileName,
                  fileSize: response.data.fileSize,
                  uploadedDate: response.data.uploadedDate
                };
                setFiles((prevFiles) => [...prevFiles, uploadedFile]);
              } catch (error) {
                console.error('Error uploading file:', error);
              }
            } else {
              console.log("No file uploaded");
            }
          }}
        />
      </div>

      <Table.ScrollContainer minWidth={500} m="5%">
        <Table striped>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>File Name</Table.Th>
              <Table.Th>File Size</Table.Th>
              <Table.Th>Uploaded Date</Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {files.map((file) => (
              <Table.Tr key={file.id}>
                <Table.Td>{file.fileName}</Table.Td>
                <Table.Td>{file.fileSize}</Table.Td>
                <Table.Td>{file.uploadedDate}</Table.Td>
                <Table.Td>
                  <Button color='red' onClick={() => handleRemoveFile(file.id)}>Remove File</Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
}

export default App;
