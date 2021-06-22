import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import FavoriteService from "../../services/favoriteService";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";

export default function SavedAdverts() {
  const { addToast } = useToasts();

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let favoriteService = new FavoriteService();
    favoriteService
      .getAllByUserId(40)
      .then((result) => setFavorites(result.data.data));
  }, []);

  let remove = (id) => {
    let favoriteService = new FavoriteService();
    favoriteService.delete(id).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  return (
    <div>
      <Card.Group>
        {favorites.map((favorite) => (
          <Card key={favorite.id} centered>
            <Link to={`/jobs/${favorite.jobAdvert.jobAdvertId}`}>
              <Card.Content>
                {favorite.jobAdvert.employer.image ? (
                  <Image
                    bordered
                    floated="right"
                    size="tiny"
                    src={favorite.jobAdvert.employer.image.imageUrl}
                  />
                ) : (
                  <Image
                    bordered
                    floated="right"
                    size="tiny"
                    src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1623937041/HRMS_uwium1.png"
                  />
                )}

                <Card.Header>
                  {favorite.jobAdvert.employer.companyName}
                </Card.Header>
                <Card.Meta>
                  {favorite.jobAdvert.position.positionName}
                </Card.Meta>
                <Card.Description>
                  <strong>
                    Son Başvuru : <br />
                    {favorite.jobAdvert.dueDate}
                  </strong>
                </Card.Description>
              </Card.Content>
            </Link>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Başvur
                </Button>
                <Button onClick={() => remove(favorite.id)} basic color="red">
                  Çıkar
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
