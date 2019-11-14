import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import List from './List.component.jsx';

function App(){
    return(
        <>
            <Query query={gql`
                {
                    viewer {
                        name
                        repositories (last:3){
                            nodes {
                                name
                                createdAt
                                databaseId
                                homepageUrl
                                isLocked
                            }
                        }
                    }
                }
            `}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Things Take Time...</p>
                    if (error) return <p>Something Went Wrong.</p>
                    return <div>
                        <ul>
                            {data.viewer.repositories.nodes.map((details, key) => { 
                                return <List data={details} key={key} />
                            })}
                        </ul>
                        
                    </div>
                }}
            </Query>
        </>
    )
}
export default App;