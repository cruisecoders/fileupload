import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Dropzone from 'react-dropzone';

const uploadFileMutation = gql`
   mutation($file : Upload!){
     uploadFile(file: $file)
   }
   `;
  export default () =>(
    <Mutation mutation={uploadFileMutation}>
    {mutate =>(
      <Dropzone onDrop={([file])=>mutate({variables:{file}})}>
       <p>Click to select file to upload</p>
      </Dropzone>

    )}
    </Mutation>
  )