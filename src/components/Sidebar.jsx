import { Stack } from '@mui/material';
import { margin } from '@mui/system';
import { categories } from '../utils/constants';

const selectedCategory = 'New' ;

const Sidebar = () => {
    return (
        <Stack direction="row" 
               sx={{
                overflow:"auto", 
                height:{ sx:'auto' ,  md:'95%'},
                flexDirection:{ md:'column'},
                }}>
                    {categories.map((category) => (
                        <button 
                            className="category-btn" 
                            style={{background: category.name === selectedCategory && '#FC1503' , color: 'white'}}
                                key={category.name}>
                            <span style={{color: category.name === selectedCategory ? 'white' : 'red' , marginRight: '15px' }} >  
                            {category.icon}</span>
                            <span style={{opasity: category.name === selectedCategory ? '1' : '0.8'}}> {category.name}</span>
                               
                        </button >
                    ))}
        </Stack>
    );
}

export default Sidebar;
