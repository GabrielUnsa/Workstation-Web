import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

const AvatarDemo = () => {

    return (
        <div>
            <div className="grid">
                <div className="col-12 md:col-4">
                    <div className="card">
                        <h5>Image</h5>
                        <Avatar image="https://thumbs.dreamstime.com/b/el-perfil-del-hombre-joven-se-adapta-elegante-84501436.jpg" className="mr-2" size="large" shape="circle" />
                    </div>
                </div>
             </div>
        </div>
    );
}
export default AvatarDemo;
